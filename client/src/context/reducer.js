import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  GET_PROJECT_BEGIN,
  GET_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
  GET_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_PROJECT_SUCCESS,
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  GET_PROJECT_TICKET_BEGIN,
  GET_PROJECT_TICKET_SUCCESS,
  GET_PROJECT_TICKET_ERROR,
  GET_MY_TICKET_BEGIN,
  GET_MY_TICKET_SUCCESS,
  GET_MY_TICKET_ERROR,
  GET_USER_PROJECT_BEGIN,
  GET_USER_PROJECT_SUCCESS,
  GET_USER_PROJECT_ERROR,
  EDIT_USER_INFO_BEGIN,
  EDIT_USER_INFO_SUCCESS,
  EDIT_USER_INFO_ERROR,
  CREATE_TICKET_BEGIN,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  DELETE_PROJECT_BEGIN,
  DELETE_PROJECT_ERROR,
  EDIT_FILTERS,
  FILTERED_TICKETS,
  CLEAR_FILTERS,
  GET_ALL_TICKETS_BEGIN,
  GET_ALL_TICKETS_SUCCESS,
  GET_ALL_TICKETS_ERROR,
  GET_USER_TICKET_BEGIN,
  GET_USER_TICKET_SUCCESS,
  CLEAR_TICKET_VALUES,
  GET_SINGLE_TICKET_BEGIN,
  GET_SINGLE_TICKET_SUCCESS,
  GET_COMMENT_TICKET_BEGIN,
  GET_COMMENT_TICKET_SUCCESS,
  ADD_COMMENT_BEGIN,
  ADD_COMMENT_SUCCESS,
  GET_PROJECT_DEV_BEGIN,
  GET_PROJECT_DEV_SUCCESS,
  ADD_DEV_TICKET_BEGIN,
  ADD_DEV_TICKET_SUCCESS,
  DELETE_TICKET_BEGIN,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  ADD_DEV_PROJECT_BEGIN,
  ADD_DEV_PROJECT_SUCCESS,
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  EDIT_USER_FILTERS,
  FILTERED_USER,
  GET_DEVS_ON_SINGLE_PROJECT_SUCCESS,
  GET_DEVS_ON_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_USER_INFO_BEGIN,
  GET_SINGLE_USER_INFO_SUCCESS,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_BEGIN,
  EDIT_PROJECT_ERROR,
  EDIT_TICKET_BEGIN,
  EDIT_TICKET_SUCCESS,
  EDIT_TICKET_ERROR,
  EDIT_USER_BEGIN,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  TEST_USER_BEGIN,
  TEST_USER_SUCCESS,
  TEST_USER_ERROR,
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
} from "../action.js";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "fail",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: "" };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "fail",
      alertText: action.payload.msg,
    };
  }

  if (action.type === TEST_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === TEST_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Logging in User...",
    };
  }
  if (action.type === TEST_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "fail",
      alertText: "Invalid Account",
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === GET_PROJECT_BEGIN) {
    return { ...state, projects_loading: true };
  }

  if (action.type === GET_PROJECT_SUCCESS) {
    return {
      ...state,
      projects: action.payload.projects,
      projects_loading: false,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CREATE_PROJECT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: "New Project Created!",
    };
  }
  if (action.type === CREATE_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload,
    };
  }

  if (action.type === CLEAR_VALUES) {
    return {
      ...state,
      project_title: "",
      project_description: "",
    };
  }

  if (action.type === CLEAR_TICKET_VALUES) {
    return {
      ...state,
      ticket_title: "",
      ticket_description: "",
      ticket_type: "functional error",
      ticket_status: "open",
      ticket_severity: "critical",
    };
  }

  if (action.type === GET_PROJECT_TICKET_BEGIN) {
    return {
      ...state,
      projectTicketLoading: true,
    };
  }

  if (action.type === GET_PROJECT_TICKET_SUCCESS) {
    return {
      ...state,
      projectTicketLoading: false,
      projectTicket: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PROJECT_BEGIN) {
    return {
      ...state,
      singleProjectLoading: true,
    };
  }

  if (action.type === GET_SINGLE_PROJECT_SUCCESS) {
    return {
      ...state,
      singleProjectLoading: false,
      singleProject: action.payload,
    };
  }

  if (action.type === GET_SINGLE_TICKET_BEGIN) {
    return {
      ...state,
      singleTicketLoading: true,
    };
  }

  if (action.type === GET_SINGLE_TICKET_SUCCESS) {
    return {
      ...state,
      singleTicketLoading: false,
      singleTicket: action.payload,
    };
  }

  if (action.type === GET_USER_PROJECT_BEGIN) {
    return {
      ...state,
      devOnProjectLoading: true,
    };
  }

  if (action.type === GET_USER_PROJECT_SUCCESS) {
    return {
      ...state,
      devOnProjectLoading: false,
      devOnProject: action.payload,
    };
  }

  if (action.type === GET_USER_PROJECT_ERROR) {
    return {
      ...state,
      devOnProjectError: true,
    };
  }

  if (action.type === GET_USER_TICKET_BEGIN) {
    return {
      ...state,
      devOnTicketLoading: true,
    };
  }

  if (action.type === GET_USER_TICKET_SUCCESS) {
    return {
      ...state,
      devOnTicketLoading: false,
      devOnTicket: action.payload,
    };
  }

  if (action.type === GET_MY_TICKET_BEGIN) {
    return {
      ...state,
      myTicketLoading: true,
    };
  }

  if (action.type === GET_MY_TICKET_SUCCESS) {
    return {
      ...state,
      myTicketLoading: false,
      myTickets: action.payload,
    };
  }

  if (action.type === GET_MY_TICKET_ERROR) {
    return {
      ...state,
      myTicketError: true,
    };
  }
  if (action.type === EDIT_USER_INFO_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_USER_INFO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertText: "User Profile Updated!",
    };
  }

  if (action.type === CREATE_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === CREATE_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,

      alertText: "New Ticket Created!",
    };
  }
  if (action.type === CREATE_TICKET_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: action.payload.msg,
    };
  }

  if (action.type === DELETE_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === DELETE_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      deleteProjectError: true,
      showAlert: true,
      alertText: "You Did Not Create This Project!",
    };
  }

  if (action.type === EDIT_FILTERS) {
    return {
      ...state,
      filtered_tickets: [...action.payload],
      searchForm: true,
    };
  }

  if (action.type === FILTERED_TICKETS) {
    const { filtered_tickets } = state;

    const { filter_text, filter_status, filter_severity, filter_type } = state;

    let tempTickets = [...filtered_tickets];

    if (filter_text) {
      tempTickets = tempTickets.filter((ticket) => {
        return ticket.title.toLowerCase().startsWith(filter_text);
      });
    }

    if (filter_status !== "all") {
      tempTickets = tempTickets.filter((ticket) => {
        return ticket.status.startsWith(filter_status);
      });
    }

    if (filter_severity !== "all") {
      tempTickets = tempTickets.filter((ticket) => {
        return ticket.severity.startsWith(filter_severity);
      });
    }

    if (filter_type !== "all") {
      tempTickets = tempTickets.filter((ticket) => {
        return ticket.type.startsWith(filter_type);
      });
    }

    return {
      ...state,
      filtered_tickets: tempTickets,
    };
  }
  if (action.type === EDIT_USER_FILTERS) {
    return {
      ...state,
      filtered_project_dev_options: [...action.payload],
      searchForm: true,
    };
  }

  if (action.type === FILTERED_USER) {
    const { filtered_project_dev_options } = state;
    const { searchDev } = state;

    let tempUsers = [...filtered_project_dev_options];

    if (searchDev) {
      tempUsers = tempUsers.filter((user) => {
        return user.user_name.toLowerCase().startsWith(searchDev);
      });
    }

    return {
      ...state,
      filtered_project_dev_options: tempUsers,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filter_text: "",
      filter_status: "all",
      filter_severity: "all",
      filter_type: "all",
      searchForm: false,
    };
  }

  if (action.type === GET_ALL_TICKETS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_ALL_TICKETS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      tickets: action.payload.Tickets,
    };
  }
  if (action.type === GET_COMMENT_TICKET_BEGIN) {
    return {
      ...state,
      commentTicketLoading: true,
    };
  }
  if (action.type === GET_COMMENT_TICKET_SUCCESS) {
    return {
      ...state,
      commentTicketLoading: false,
      commentsOnTicket: action.payload,
    };
  }
  if (action.type === ADD_COMMENT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ADD_COMMENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_PROJECT_DEV_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_PROJECT_DEV_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      ticketDevOptions: action.payload,
    };
  }

  if (action.type === ADD_DEV_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ADD_DEV_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === DELETE_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === DELETE_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === DELETE_TICKET_ERROR) {
    return {
      ...state,
      alertText: "You did not create this ticket!",
    };
  }

  if (action.type === GET_ALL_USERS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_ALL_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      projectDevOptions: action.payload,
    };
  }
  if (action.type === ADD_DEV_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === ADD_DEV_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_DEVS_ON_SINGLE_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_DEVS_ON_SINGLE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      devOnSingleProject: action.payload,
    };
  }

  if (action.type === GET_SINGLE_USER_INFO_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_SINGLE_USER_INFO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      adminEdit: action.payload,
    };
  }

  if (action.type === EDIT_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleProject: action.payload,
      alertText: "Project Edit Successful",
    };
  }

  if (action.type === EDIT_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: "You did not create this project!",
    };
  }
  if (action.type === EDIT_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleTicket: action.payload,
      showAlert: true,
      alertText: "Ticket Edit Successful",
    };
  }

  if (action.type === EDIT_TICKET_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: "You did not create this project!",
    };
  }

  if (action.type === EDIT_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      adminEdit: action.payload,
      alertText: "User Updated",
    };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }

  if (action.type === OPEN_SIDEBAR) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
