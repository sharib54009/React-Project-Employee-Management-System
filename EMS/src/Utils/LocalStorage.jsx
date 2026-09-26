import EmployeeDashboard from "../Components/Dashboard/EmployeeDashboard";

const employees =  [
  {
    "empId": "EMP001",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Employee Records",
        "taskDesc": "Review and update employee information in the HR system.",
        "taskDate": "2026-09-24",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDesc": "Prepare the monthly department performance report.",
        "taskDate": "2026-09-25",
        "category": "Reports"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDesc": "Attend the weekly team progress meeting.",
        "taskDate": "2026-09-22",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit Expense Report",
        "taskDesc": "Submit the pending travel and office expense report.",
        "taskDate": "2026-09-20",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-up",
        "taskDesc": "Follow up with the client regarding the pending requirements.",
        "taskDate": "2026-09-26",
        "category": "Client"
      }
    ]
  },
  {
    "empId": "EMP002",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Dashboard",
        "taskDesc": "Create the initial UI design for the employee dashboard.",
        "taskDate": "2026-09-24",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Review UI Components",
        "taskDesc": "Review existing components and suggest improvements.",
        "taskDate": "2026-09-25",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Wireframes",
        "taskDesc": "Create wireframes for the upcoming application screens.",
        "taskDate": "2026-09-21",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDesc": "Update the project documentation with the latest changes.",
        "taskDate": "2026-09-20",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit Design Proposal",
        "taskDesc": "Submit the final design proposal for team approval.",
        "taskDate": "2026-09-18",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDesc": "Prepare slides for the upcoming product presentation.",
        "taskDate": "2026-09-27",
        "category": "Presentation"
      }
    ]
  },
  {
    "empId": "EMP003",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDesc": "Investigate and fix the authentication issue reported by users.",
        "taskDate": "2026-09-24",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDesc": "Integrate the employee API with the frontend application.",
        "taskDate": "2026-09-25",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDesc": "Create and verify the latest database backup.",
        "taskDate": "2026-09-26",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDesc": "Review the latest pull request and provide feedback.",
        "taskDate": "2026-09-22",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Testing",
        "taskDesc": "Run functional tests for the employee management module.",
        "taskDate": "2026-09-21",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy Update",
        "taskDesc": "Deploy the latest application update to the staging server.",
        "taskDate": "2026-09-19",
        "category": "Deployment"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize API",
        "taskDesc": "Improve API response time and reduce unnecessary database queries.",
        "taskDate": "2026-09-28",
        "category": "Backend"
      }
    ]
  },
  {
    "empId": "EMP004",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDesc": "Prepare the weekly sales performance report.",
        "taskDate": "2026-09-24",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Contact Leads",
        "taskDesc": "Contact new leads and record their responses.",
        "taskDate": "2026-09-25",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update CRM",
        "taskDesc": "Update customer information and recent interactions in the CRM.",
        "taskDate": "2026-09-22",
        "category": "CRM"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDesc": "Attend the scheduled client discussion.",
        "taskDate": "2026-09-21",
        "category": "Meetings"
      }
    ]
  },
  {
    "empId": "EMP005",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDesc": "Check current office inventory and update stock records.",
        "taskDate": "2026-09-24",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Order Supplies",
        "taskDesc": "Place an order for required office supplies.",
        "taskDate": "2026-09-25",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Verify Delivery",
        "taskDesc": "Verify the latest office supply delivery.",
        "taskDate": "2026-09-22",
        "category": "Logistics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Inventory",
        "taskDesc": "Update the inventory management records.",
        "taskDate": "2026-09-21",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Vendor Follow-up",
        "taskDesc": "Follow up with the vendor regarding the delayed shipment.",
        "taskDate": "2026-09-19",
        "category": "Vendor"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Monthly Stock Report",
        "taskDesc": "Prepare the monthly inventory and stock usage report.",
        "taskDate": "2026-09-29",
        "category": "Reports"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Office Audit",
        "taskDesc": "Complete the scheduled office inventory audit.",
        "taskDate": "2026-09-30",
        "category": "Audit"
      }
    ]
  }
]


const admin = [ 
    { 
    "empId": "ADMIN001",
    "email": "admin@example.com",
    "password": "123"
    } 
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin}  
}
