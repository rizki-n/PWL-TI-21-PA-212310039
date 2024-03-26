
import Headers from './Headers';
import Footer from './Footer';
import ChapterOne from '../modules/widgets/ChapterOne';

const LayoutInit = ({children}) => {
    return (
        <div>
            <div>
                <div>

                    <Headers/>
                                
                    <section className="">
                        <div className=""> 
                            <ChapterOne/> {/* untuk isiannya */}
                        </div>
                    </section>

                    <Footer/>

                </div>
            </div>
        </div>
    );
}

export default LayoutInit;
