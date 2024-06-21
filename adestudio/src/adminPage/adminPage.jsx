import React, { Component } from 'react';
import TableOrder from './tableOrder';
import ChartAnalytic from './chartAnalytic';

class AdminPage extends Component {
    render() {
        return (
            <div>
        <div>

        </div>
        <div>
            <section>
            <TableOrder/> 
            </section>
        </div>
        <div>
            <ChartAnalytic/>            
        </div>
        
      </div>
        );
    }
}

export default AdminPage;
