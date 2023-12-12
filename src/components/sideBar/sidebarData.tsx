import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faTrophy, faUser, faBell} from '@fortawesome/free-solid-svg-icons'
import { FaThLarge, FaThList } from "react-icons/fa";


export const SidebarData = [
    {
        title: "Analytics",
        path: "/analytics",
        icon: <FontAwesomeIcon icon={faChartLine} />
        },
        {
            title: "Sports",
            path: "/sports",
            icon: <FontAwesomeIcon icon={faTrophy} />
        },
        {
            title: "Run & Rate",
            path: "/runandrate",
            icon: <FaThLarge/>
        },
        {
            title: "Role",
            path: "/role",
            icon: <FontAwesomeIcon icon={faUser} />
        },
        {
            title: "Notifications",
            path: "/notifications",
            icon: <FontAwesomeIcon icon={faBell} />
        },
        {
            title: "Activity Log",
            path: "/activityLog",
            icon: <FaThList />
        },
    ]