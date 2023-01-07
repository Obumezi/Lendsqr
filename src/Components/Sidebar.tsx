import '../Styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome, faUser,
    faUsers,
    faMoneyBill, faHandshake, faPiggyBank,
    faHandHoldingDollar, faUserCheck, faUserXmark, faBriefcase, faBank
} from '@fortawesome/free-solid-svg-icons'



function Sidebar() {
    return (
        <aside className="sidebar">

            <h2 className="sidebar__title">Switch Organisation</h2>



            <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faHome} />
                <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>DashBoard</a>
            </div>





            <ul className="sidebar__menu">
                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faUser} />
                    <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Users</a>
                </div>


                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faUsers} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Guarantors</a>
                    </div>

                </li>








                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faMoneyBill} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Loans</a>
                    </div>

                </li>


                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faHandshake} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Decison Model</a>
                    </div>

                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faPiggyBank} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Savings</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faHandHoldingDollar} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Loan Request</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faUserCheck} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>WhiteList</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faUserXmark} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Karma</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link-head">BUSINESSES </a>
                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faBriefcase} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Organisation</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faHandHoldingDollar} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Loan Products</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faBank} />
                        <a href="#" className="sidebar__menu-link" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Savings Products</a>
                    </div>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Transactions </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Services </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Service Account </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Settlements </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Reports</a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Settimgs** </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Prefrences </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Fess and Pricing </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Audit Logs </a>
                </li>
                <li className="sidebar__menu-item">
                    <a href="#" className="sidebar__menu-link">Savings Products </a>
                </li>

            </ul>
        </aside>
    );
}

export default Sidebar;