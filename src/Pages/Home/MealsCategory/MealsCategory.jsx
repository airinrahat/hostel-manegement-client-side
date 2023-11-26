/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import MealsCard from "../../../Components/MealsCard/MealsCard";
import MealsCategoryTab from "./MealsCategoryTab";
import { Link } from "react-router-dom";

const MealsCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const Breakfast = menu.filter((item) => item.category === "breakfast");
  const lunch = menu.filter((item) => item.category === "lunch");
  const dinner = menu.filter((item) => item.category === "dinner");

  return (
    <div className="text-center my-4 mx-auto max-w-screen-xl">
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl font-bold uppercase  py-4">All Category</h3>
      </div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="font-bold">
          <Tab>All Meals</Tab>
          <Tab> Breakfast</Tab>
          <Tab> Lunch</Tab>
          <Tab> Dinner</Tab>
        </TabList>

        <TabPanel>
          <MealsCategoryTab items={dinner}></MealsCategoryTab>
          <MealsCategoryTab items={lunch}></MealsCategoryTab>
          <MealsCategoryTab items={Breakfast}></MealsCategoryTab>
          <Link to="/allmeals">
            {" "}
            <button className="btn bg-[#ef8829]">See All</button>
          </Link>
        </TabPanel>

        <TabPanel>
          <MealsCategoryTab items={Breakfast}></MealsCategoryTab>
        </TabPanel>
        <TabPanel>
          <MealsCategoryTab items={lunch}></MealsCategoryTab>
        </TabPanel>
        <TabPanel>
          <MealsCategoryTab items={dinner}></MealsCategoryTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsCategory;
