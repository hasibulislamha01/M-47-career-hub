import Banner from "../Header/banner";
import JobCategories from "../JobCategories/JobCategories";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <JobCategories></JobCategories>
        </div>
    );
};

export default Home;