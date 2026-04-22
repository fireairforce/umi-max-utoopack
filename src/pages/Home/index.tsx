import type { A } from './types';

export { A };

import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { HomeIcon } from '@radix-ui/react-icons';
import { useModel } from '@umijs/max';
import { util } from './util';
import { useEffect } from 'react';
// import './global2.less';
// import styles from './index.less';
// import path from 'path';
// import { z } from 'test-z';
import './index.less';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';


// z
export * from './type.d';

const isCI = process.env.CI;

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

isCI;

console.log('isCI', isCI);

// export function loadStat(name: string) {
//   return require(require.resolve(path.join(name, 'package.json')))
// }

// const query = require(require.resolve('antd'));
// console.log(query);

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log('2333');
  };
  return (
    <PageContainer ghost>
      <HomeIcon />
      <div className="ant-checkbox-wrapper">test style1</div>
      <div className="ant-menu">test style2</div>
      <div>{util}</div>
      <div>
        <Guide name={trim(name)} />
        <Editor
          mode="default"
          style={{ height: 400 }}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;
