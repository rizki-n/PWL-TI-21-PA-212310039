import React from 'react';
import Footers from './Footers';
import Headers from './Headers';

const LayoutInit = ({children}) => {
    return (
        <div>
            <div>
                <div>

                    <Headers/>

                    <section>
                        <div className=''>
                            {children}
                        </div>
                    </section>

                    <Footers/>

                </div>
            </div>
        </div>
    );
}

export default LayoutInit;
