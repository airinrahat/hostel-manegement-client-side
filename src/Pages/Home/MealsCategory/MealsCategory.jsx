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

  const breakfast = menu.filter((item) => item.category === "breakfast");
  const lunch = menu.filter((item) => item.category === "lunch");
  const dinner = menu.filter((item) => item.category === "dinner");

  const breakfastSubset = breakfast.slice(0, 1);
  const lunchSubset = lunch.slice(0, 1);
  const dinnerSubset = dinner.slice(0, 1);

  const allmenu = [...breakfastSubset, ...lunchSubset, ...dinnerSubset];
  // console.log(allmenu);

  return (
    <div className="text-center my-4 mx-auto max-w-screen-xl">
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-5xl font-bold uppercase  py-4">All Category</h3>
      </div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="font-bold text-2xl mb-2">
          <Tab>All Meals</Tab>
          <Tab> Breakfast</Tab>
          <Tab> Lunch</Tab>
          <Tab> Dinner</Tab>
        </TabList>

        <TabPanel>
          <MealsCategoryTab items={allmenu}></MealsCategoryTab>
          <Link to="/allmeals">
            {" "}
            <button className="btn bg-[#ef8829]">See All</button>
          </Link>
        </TabPanel>

        <TabPanel>
          <MealsCategoryTab items={breakfast.slice(0, 3)}></MealsCategoryTab>
        </TabPanel>
        <TabPanel>
          <MealsCategoryTab items={lunch.slice(0, 3)}></MealsCategoryTab>
        </TabPanel>
        <TabPanel>
          <MealsCategoryTab items={dinner.slice(0, 3)}></MealsCategoryTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsCategory;
