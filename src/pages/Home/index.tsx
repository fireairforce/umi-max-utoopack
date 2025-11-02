import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import './global2.less';
import styles from './index.less';
// import { z } from 'test-z';

// z
export * from './type.d';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className="ant-checkbox-wrapper">test style</div>
      <div className="ant-menu">test style2</div>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
