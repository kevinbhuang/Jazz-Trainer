import React from 'react';

const ChordDiagram = ({
  chord,
  showFingerings = true,
  onFretClick = null,
  customDots = []
}) => {
  const { name, dots = [], muted = [], position = 1 } = chord || {};

  // Dimensions
  const width = 200;
  const height = 240;
  const margin = { top: 40, right: 20, bottom: 20, left: 30 };
  const boardWidth = width - margin.left - margin.right;
  const boardHeight = height - margin.top - margin.bottom;

  const strings = 6;
  const frets = 5;

  const stringSpacing = boardWidth / (strings - 1);
  const fretSpacing = boardHeight / frets;

  const getX = (string) => margin.left + (strings - string) * stringSpacing;
  const getY = (fretIndex) => margin.top + fretIndex * fretSpacing;

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      {name && <h3 className="text-lg font-bold mb-2 text-slate-800">{name}</h3>}
      <svg width={width} height={height} className="overflow-visible">
        {/* Fretboard Nut / Top border */}
        <line
          x1={getX(6)}
          y1={margin.top}
          x2={getX(1)}
          y2={margin.top}
          stroke="black"
          strokeWidth={position === 1 ? 6 : 2}
        />

        {/* Frets */}
        {[...Array(frets + 1)].map((_, i) => (
          <line
            key={`fret-${i}`}
            x1={getX(6)}
            y1={getY(i)}
            x2={getX(1)}
            y2={getY(i)}
            stroke="gray"
            strokeWidth="1"
          />
        ))}

        {/* Strings */}
        {[...Array(strings)].map((_, i) => (
          <line
            key={`string-${i}`}
            x1={getX(i + 1)}
            y1={margin.top}
            x2={getX(i + 1)}
            y2={getY(frets)}
            stroke="black"
            strokeWidth="1.5"
          />
        ))}

        {/* Position Marker */}
        {position > 1 && (
          <text
            x={margin.left - 15}
            y={margin.top + fretSpacing / 2 + 5}
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            {position}fr
          </text>
        )}

        {/* Muted Strings */}
        {muted.map(string => (
          <text
            key={`muted-${string}`}
            x={getX(string)}
            y={margin.top - 10}
            fontSize="16"
            textAnchor="middle"
            fill="red"
          >
            ×
          </text>
        ))}

        {/* Clickable areas for interaction */}
        {onFretClick && [...Array(strings)].map((_, s) => (
          [...Array(frets)].map((_, f) => (
            <rect
              key={`rect-${s + 1}-${f}`}
              x={getX(s + 1) - stringSpacing / 2}
              y={getY(f)}
              width={stringSpacing}
              height={fretSpacing}
              fill="transparent"
              className="cursor-pointer hover:fill-blue-500/10"
              onClick={() => onFretClick(s + 1, position + f)}
            />
          ))
        ))}

        {/* Custom Dots (for interactive mode) */}
        {customDots.map((dot, idx) => {
          const fretOffset = dot.fret - position;
          if (fretOffset < 0 || fretOffset >= frets) return null;
          return (
            <circle
              key={`custom-dot-${idx}`}
              cx={getX(dot.string)}
              cy={getY(fretOffset + 0.5)}
              r="8"
              fill="#3b82f6"
            />
          );
        })}

        {/* Render dots for the chord */}
        {dots.map((dot, idx) => {
          const fretOffset = dot.fret - position;
          if (fretOffset < 0 || fretOffset >= frets) return null;

          return (
            <g key={`dot-${idx}`}>
              <circle
                cx={getX(dot.string)}
                cy={getY(fretOffset + 0.5)}
                r="10"
                fill="#334155"
              />
              {showFingerings && dot.finger && (
                <text
                  x={getX(dot.string)}
                  y={getY(fretOffset + 0.5) + 5}
                  fontSize="12"
                  textAnchor="middle"
                  fill="white"
                >
                  {dot.finger}
                </text>
              )}
              {dot.note && (
                <text
                  x={getX(dot.string)}
                  y={getY(fretOffset + 0.5) + 25}
                  fontSize="10"
                  textAnchor="middle"
                  fill="#64748b"
                  fontWeight="bold"
                >
                  {dot.note}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ChordDiagram;
