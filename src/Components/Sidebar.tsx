import "../Styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faUsers,
    faMoneyBill,
    faHandshake,
    faPiggyBank,
    faHandHoldingDollar,
    faUserCheck,
    faUserXmark,
    faBriefcase,
    faBank,
    faLeftRight,
    faSpinner,
    faUserCog,
    faScroll,
    faChartBar,
    faSliders,
    faPercentage,
    faClipboard,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <aside className='sidebar'>
            {/* <h2 className='sidebar__title'>Switch Organisation</h2> */}

            <div style={{ display: "inline-block", verticalAlign: "middle", marginBottom:'25px' }}>


                <FontAwesomeIcon style={{ verticalAlign: "middle" }} icon={faBriefcase} className='icons' />
                <a href='#' className='sidebar__menu-link'>
                    Switch Orgainaization
                </a>

            </div>


            <div style={{ display: "inline-block", verticalAlign: "middle" , marginBottom:'20px'}}>
                <FontAwesomeIcon style={{ verticalAlign: "middle" }} icon={faHome} className='icons' />
                <a
                    href='#'
                    className='sidebar__menu-link'
                    style={{ display: "inline-block", verticalAlign: "middle" }}>
                    DashBoard
                </a>
            </div>

            <li className='sidebar__menu-item'>
                <a href='#' className='sidebar__menu-link-head'>
                    CUSTOMERS
                </a>
            </li>

            <ul className='sidebar__menu'>
                <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                    <FontAwesomeIcon style={{ verticalAlign: "middle" }} icon={faUser} className='icons' />
                    <a
                        href='#'
                        className='sidebar__menu-link'
                        style={{ display: "inline-block", verticalAlign: "middle" }}>
                        Users
                    </a>
                </div>

                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faUsers}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Guarantors
                        </a>
                    </div>
                </li>

                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faMoneyBill}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Loans
                        </a>
                    </div>
                </li>

                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faHandshake}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Decison Model
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faPiggyBank}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Savings
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faHandHoldingDollar}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Loan Request
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faUserCheck}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            WhiteList
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faUserXmark}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Karma
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <a href='#' className='sidebar__menu-link-head'>
                        BUSINESSES
                    </a>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faBriefcase}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Organisation
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faHandHoldingDollar}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Loan Products
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faBank}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Savings Products
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faLeftRight}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Transactions
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faSpinner}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Services
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faUserCog}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Service Account
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faScroll}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Settlements
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faChartBar}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Reports
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <a href='#' className='sidebar__menu-link-head'>
                        SETTINGS
                    </a>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faSliders}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Prefrences
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faPercentage}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Reports
                        </a>
                    </div>
                </li>
                <li className='sidebar__menu-item'>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <FontAwesomeIcon
                            style={{ verticalAlign: "middle" }}
                            icon={faClipboard}
                            className='icons'
                        />
                        <a
                            href='#'
                            className='sidebar__menu-link'
                            style={{ display: "inline-block", verticalAlign: "middle" }}>
                            Audit Logs
                        </a>
                    </div>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
