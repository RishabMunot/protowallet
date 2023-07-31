import React from "react";

import AccountIcon from "@/icons/AccountIcon";
import BudgetIcon from "@/icons/BudgetIcon";
import CategoriesIcon from "@/icons/CategoriesIcon";
import HomeIcon from "@/icons/HomeIcon";
import LabelsIcon from "@/icons/LabelsIcon";
import RecurringTransactionIcon from "@/icons/RecurringTransactionIcon";
import TransactionIcon from "@/icons/TransactionIcon";

import Sidebar from "./sidebar/Sidebar";

export type GeneralLayoutProps = {
  children: React.ReactNode;
  derefProto: () => void;
  dbName: string;
};

const SIDE_BAR_ITEMS = [
  { title: "TEST", icon: HomeIcon, href: "" },
  { href: "/home", icon: HomeIcon, title: "Home" },
  { href: "/budgets", icon: BudgetIcon, title: "Budgets" },
  { href: "/transactions", icon: TransactionIcon, title: "Transactions" },
  { href: "/accounts", icon: AccountIcon, title: "Accounts" },
  { href: "/labels", icon: LabelsIcon, title: "Labels" },
  { href: "/categories", icon: CategoriesIcon, title: "Categories" },
  {
    href: "/recurring-transactions",
    icon: RecurringTransactionIcon,
    title: "Recurring Transactions",
  },
];

const GeneralLayout = (props: GeneralLayoutProps) => {
  return (
    <>
      {/* <GeneralHeader derefProto={props.derefProto} dbName={props.dbName} /> */}
      <div className="bg-white shadow-lg rounded-sm">
        <div className="flex flex-col md:flex-row md:-mr-px">
          <Sidebar items={SIDE_BAR_ITEMS} />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default GeneralLayout;
