window.GeometricBackground = function GeometricBackground({ variant = 'hero', theme = 'light' }) {
  try {
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 主題顏色配置
    const colors = theme === 'dark' ? {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      tertiary: '#404040',
      accent: '#FFFFFF'
    } : {
      primary: '#222222',
      secondary: '#7B7B7B',
      tertiary: '#E0E0E0',
      accent: '#FF6B6B'  // 使用更明顯的顏色測試
    };

    // 計算視差效果
    const parallax = (speed) => {
      return variant === 'hero' ? scrollY * speed : 0;
    };

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* 網格圖案 */}
            <pattern id={`grid-pattern-${variant}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.tertiary} strokeWidth="1" opacity="0.3"/>
            </pattern>

            {/* 漸層定義 */}
            <linearGradient id={`gradient1-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.1" />
              <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id={`gradient2-${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.secondary} stopOpacity="0.08" />
              <stop offset="100%" stopColor={colors.primary} stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Hero 變體 - 左側設計 */}
          {variant === 'hero' && (
            <>
              {/* 左上角 - 網格背景 */}
              <g style={{ transform: `translate(${parallax(-0.1)}px, ${parallax(-0.05)}px)` }}>
                <rect x="-100" y="-100" width="600" height="600" fill={`url(#grid-pattern-${variant})`} opacity="0.8">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 250"
                    to="5 250 250"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>

              {/* 左側 - 波浪曲線 (橙紅漸層) */}
              <g style={{ transform: `translate(${parallax(0.15)}px, ${parallax(0.08)}px)` }}>
                <path d="M -50,400 Q 100,350 150,450 T 350,500 T 550,450"
                      fill="none"
                      stroke="#FF6B6B"
                      strokeWidth="80"
                      opacity="0.15"
                      strokeLinecap="round">
                  <animate
                    attributeName="d"
                    dur="8s"
                    repeatCount="indefinite"
                    values="M -50,400 Q 100,350 150,450 T 350,500 T 550,450;
                            M -50,420 Q 100,370 150,470 T 350,480 T 550,470;
                            M -50,400 Q 100,350 150,450 T 350,500 T 550,450"
                  />
                </path>
              </g>

              {/* 右上 - 藍紫色波浪 */}
              <g style={{ transform: `translate(${parallax(-0.12)}px, ${parallax(-0.06)}px)` }}>
                <path d="M 1400,100 Q 1550,80 1600,150 T 1800,200 T 2000,150"
                      fill="none"
                      stroke="#6366F1"
                      strokeWidth="70"
                      opacity="0.12"
                      strokeLinecap="round">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="M 1400,100 Q 1550,80 1600,150 T 1800,200 T 2000,150;
                            M 1400,120 Q 1550,100 1600,130 T 1800,180 T 2000,170;
                            M 1400,100 Q 1550,80 1600,150 T 1800,200 T 2000,150"
                  />
                </path>
              </g>

              {/* 圓形元素 - 左下角 */}
              <g style={{ transform: `translate(${parallax(0.1)}px, ${parallax(0.2)}px)` }}>
                <circle cx="200" cy="900" r="150" fill="#FF8C8C" opacity="0.1">
                  <animate attributeName="r" values="120;140;120" dur="6s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* 黃色圓形 - 中央偏右下 */}
              <g style={{ transform: `translate(${parallax(-0.08)}px, ${parallax(0.12)}px)` }}>
                <circle cx="1400" cy="850" r="120" fill="#FBBF24" opacity="0.1">
                  <animate attributeName="cy" values="850;830;850" dur="7s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* 裝飾小圓 */}
              <circle cx="1600" cy="300" r="40" fill="#EF4444" opacity="0.15">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="200" r="35" fill="#8B5CF6" opacity="0.15">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="5s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* About 變體 - 對稱設計 */}
          {variant === 'about' && (
            <>
              {/* 左側 - 藍色圓形 */}
              <circle cx="300" cy="500" r="250" fill="#6366F1" opacity="0.08">
                <animate attributeName="r" values="200;220;200" dur="8s" repeatCount="indefinite" />
                <animate attributeName="cx" values="300;320;300" dur="6s" repeatCount="indefinite" />
              </circle>

              {/* 右側 - 紅粉色方形 */}
              <g opacity="0.08">
                <rect x="1400" y="200" width="350" height="350" fill="#FF6B9D">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 1550 350"
                    to="10 1550 350"
                    dur="15s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>

              {/* 頂部波浪 */}
              <path d="M 0,100 Q 480,80 960,100 T 1920,100"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="60"
                    opacity="0.5"
                    strokeLinecap="round">
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="M 0,100 Q 480,80 960,100 T 1920,100;
                          M 0,120 Q 480,100 960,120 T 1920,120;
                          M 0,100 Q 480,80 960,100 T 1920,100"
                />
              </path>

              {/* 底部裝飾線 */}
              <g opacity="0.2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line
                    key={i}
                    x1={1200 + i * 40}
                    y1="800"
                    x2={1200 + i * 40}
                    y2="1000"
                    stroke={colors.secondary}
                    strokeWidth="8"
                    opacity={0.6 - i * 0.08}
                  >
                    <animate
                      attributeName="y1"
                      values="800;780;800"
                      dur={`${5 + i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                ))}
              </g>
            </>
          )}

          {/* Featured 變體 - 動態網格 */}
          {variant === 'featured' && (
            <>
              {/* 動態網格背景 */}
              <rect x="0" y="0" width="1920" height="1080" fill={`url(#grid-pattern-${variant})`} opacity="0.3" />

              {/* 中央發光圓 */}
              <circle cx="960" cy="540" r="300" fill={`url(#gradient1-${variant})`} opacity="0.2">
                <animate attributeName="r" values="300;350;300" dur="10s" repeatCount="indefinite" />
              </circle>

              {/* 軌道圓點 */}
              {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i * 72) * (Math.PI / 180);
                const radius = 400;
                const cx = 960 + radius * Math.cos(angle);
                const cy = 540 + radius * Math.sin(angle);

                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="15"
                    fill={colors.accent}
                    opacity="0.4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur={`${3 + i}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })}
            </>
          )}

          {/* Skills 變體 - 技能主題設計 */}
          {variant === 'skills' && (
            <>
              {/* 左上 - 橙黃色漸層圓 (產品管理色系) */}
              <circle cx="200" cy="200" r="180" fill="#FBBF24" opacity="0.4">
                <animate attributeName="r" values="180;200;180" dur="7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite" />
              </circle>

              {/* 右上 - 橙色圓 (技術工具色系) */}
              <circle cx="1650" cy="180" r="150" fill="#FB923C" opacity="0.5">
                <animate attributeName="r" values="150;170;150" dur="8s" repeatCount="indefinite" />
                <animate attributeName="cy" values="180;160;180" dur="6s" repeatCount="indefinite" />
              </circle>

              {/* 中央偏左 - 黃色方形 (數據分析) */}
              <g opacity="0.08">
                <rect x="350" y="400" width="200" height="200" fill="#EAB308">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 450 500"
                    to="15 450 500"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>

              {/* 右下 - 琥珀色圓形 (軟實力) */}
              <circle cx="1500" cy="900" r="160" fill="#F59E0B" opacity="0.08">
                <animate attributeName="r" values="160;180;160" dur="9s" repeatCount="indefinite" />
              </circle>

              {/* 波浪線條 - 頂部 */}
              <path d="M 0,150 Q 480,120 960,150 T 1920,150"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="50"
                    opacity="0.4"
                    strokeLinecap="round">
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="M 0,150 Q 480,120 960,150 T 1920,150;
                          M 0,170 Q 480,140 960,170 T 1920,170;
                          M 0,150 Q 480,120 960,150 T 1920,150"
                />
              </path>

              {/* 波浪線條 - 底部 */}
              <path d="M 0,950 Q 480,920 960,950 T 1920,950"
                    fill="none"
                    stroke="#FB923C"
                    strokeWidth="60"
                    opacity="0.35"
                    strokeLinecap="round">
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="M 0,950 Q 480,920 960,950 T 1920,950;
                          M 0,930 Q 480,960 960,930 T 1920,930;
                          M 0,950 Q 480,920 960,950 T 1920,950"
                />
              </path>

              {/* 裝飾小圓 - 點綴效果 */}
              <circle cx="800" cy="300" r="30" fill="#FBBF24" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="1200" cy="700" r="35" fill="#F59E0B" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="850" r="25" fill="#EAB308" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite" />
              </circle>

              {/* 網格裝飾 - 右下角 */}
              <g opacity="0.3">
                <rect x="1400" y="700" width="400" height="300" fill={`url(#grid-pattern-${variant})`}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 1600 850"
                    to="-5 1600 850"
                    dur="18s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            </>
          )}
        </svg>
      </div>
    );
  } catch (error) {
    console.error('GeometricBackground component error:', error);
    return null;
  }
}
