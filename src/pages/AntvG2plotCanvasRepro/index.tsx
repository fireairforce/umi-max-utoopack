import { PageContainer } from '@ant-design/pro-components';
import { Area } from '@antv/g2plot';
import { useEffect, useRef } from 'react';

const chartData = [
  { dt: '2026-05-01', action: 'visit', pv: 120 },
  { dt: '2026-05-02', action: 'visit', pv: 180 },
  { dt: '2026-05-03', action: 'visit', pv: 150 },
  { dt: '2026-05-01', action: 'submit', pv: 40 },
  { dt: '2026-05-02', action: 'submit', pv: 64 },
  { dt: '2026-05-03', action: 'submit', pv: 58 },
];

const AntvG2plotCanvasRepro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const chart = new Area(containerRef.current, {
      data: chartData,
      xField: 'dt',
      yField: 'pv',
      seriesField: 'action',
      height: 320,
      isStack: false,
      renderer: 'canvas',
      legend: {
        position: 'top-left',
      },
    });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <PageContainer
      ghost
      title="@antv/g2plot Canvas 复现"
      content="pnpm overrides 将 @antv/g-canvas 锁到 2.x 后，G2Plot v2 通过 G2 v4 创建 Canvas 会在运行时报 Canvas is not a constructor。"
    >
      <div
        ref={containerRef}
        style={{
          height: 320,
          padding: 24,
          background: '#fff',
        }}
      />
    </PageContainer>
  );
};

export default AntvG2plotCanvasRepro;
