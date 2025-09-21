import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
// import assetsBpmn from '@/assets/assets.bpmn';
import assetsWasm from '@/assets/assets.wasm';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <video src={assetsWasm}></video>
      </div>
    </PageContainer>
  );
};

export default HomePage;
