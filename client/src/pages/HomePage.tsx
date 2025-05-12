import RetinaComponent from '../components/RetinaComponent';
import { Layout } from '../components/Layout';
import { article as Article } from '../components/Content';

const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-24">
        <Article id="laser-simulation">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Retinal Laser Simulation
          </h2>
          <p className="mt-2 text-base text-gray-900">
            The white spots appearing in the image are simulated retinal laser spots.
          </p>
          <div className="flex justify-center my-8">
            <RetinaComponent />
          </div>
        </Article>
      </div>  
    </Layout>
  );
};

export default HomePage;
