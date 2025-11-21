import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
// import './global2.less';
// import styles from './index.less';
// import path from 'path';
// import { z } from 'test-z';
import './index.less';
import type { Args } from './types';

export type { Args };

// z
export * from './type.d';

// export function loadStat(name: string) {
//   return require(require.resolve(path.join(name, 'package.json')))
// }

// const query = require(require.resolve('antd'));
// console.log(query);

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className="ant-checkbox-wrapper">test style</div>
      <div className="ant-menu">test style2</div>
      <div>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
