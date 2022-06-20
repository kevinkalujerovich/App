import React from "react";
import { StyleSheet } from "react-native";
import AppbarHeader from "./AppbarHeader";
import CategoriesTab from "./CategoriesTab";

const Categories = () => {
  const list = [
    { nombre: "item 1", id: "1" },
    { nombre: "item 2", id: "2" },
    { nombre: "item 3", id: "3" },
    { nombre: "item 4", id: "4" },
    { nombre: "item 5", id: "5" },
    { nombre: "item 6", id: "6" },
    { nombre: "item 7", id: "7" },
    { nombre: "item 8", id: "8" },
    { nombre: "item 9", id: "9" },
    { nombre: "item 10", id: "10" },
  ];

  return (
    <>
      <AppbarHeader title="Categorias" />
      <CategoriesTab />
    </>
  );
};

const styles = StyleSheet.create({});

export default Categories;
