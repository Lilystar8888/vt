export const def_columns = [
  {
    width: 250,
    label: "Company",
    field: "company",
  },
  {
    width: 250,
    //sort: false,
    defaultValue: "Warsaw",
    options: ["London", "Warsaw", "New York"],
    inputType: "select",
    label: "Office",
    field: "office",
  },
  {
    width: 250,
    inputType: "number",
    defaultValue: 1,
    label: "Employees",
    field: "employees",
  },
  {
    width: 100,
    defaultValue: false,
    inputType: "checkbox",
    label: "international",
    field: "international",
  },
];

export const def_searchcols = [
  { text: "Company", value: "company" },
  { text: "Office", value: "office" },
  { text: "Employees", value: "employees" },
  { text: "international", value: "international" },
];

export const emptydata = {
  columns: def_columns,
  rows: [],
};

export const apidata = {
  columns: def_columns,
  rows: [
    {
      company: "Smith & Johnson",
      office: "London",
      employees: 30,
      international: true,
    },
    {
      company: "P.J. Company",
      office: "London",
      employees: 80,
      international: false,
    },
    {
      company: "Food & Wine",
      office: "London",
      employees: 12,
      international: false,
    },
    {
      company: "IT Service",
      office: "London",
      employees: 17,
      international: false,
    },
    {
      company: "A. Jonson Gallery",
      office: "London",
      employees: 4,
      international: false,
    },
    {
      company: "F.A. Architects",
      office: "London",
      employees: 4,
      international: false,
    },
  ],
};

export const apiTables = [
  {
    split_id: "tab1",
    split_name: "tab1",
    split_data: apidata,
  },
  {
    split_id: "tab2",
    split_name: "tab2",
    split_data: emptydata,
  },
  {
    split_id: "tab3",
    split_name: "tab3",
    split_data: emptydata,
  },
];

export const apiSplits = [
  {
    split_id: "tab1",
    split_name: "tab1",
  },
  {
    split_id: "tab2",
    split_name: "tab2",
  },
  {
    split_id: "tab3",
    split_name: "tab3",
  },
];
