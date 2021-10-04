import Chart from '../Chart/Chart';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="card">
            <Chart></Chart>
            </div>
            <div>
                <Services showAll={false}></Services>
            </div>
        </div>
    );
};

export default Home;