/**
 * ルーディング＆アニメーション管理js
 */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Start from "../pages/Start";
import Main from "../pages/Main";
import AccountDetail from "../pages/AccountDetail";
import AccountEdit from "../pages/AccountEdit";
import FavoriteBrands from "../pages/FavoriteBrands";
import Sidebar from "../components/common/Aside";
import Login from "../pages/Login";
import Register from "../pages/Register";

//アニメーション場面のステータス設定
const pageVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5, // フェードインに遅延を追加
    },
  },
  out: {
    opacity: 0,
    y: 20,
  },
};

//Transitionの設定
const pageTransition = {
  duration: 0.5,
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/*Start*/}
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Start />
            </motion.div>
          }
        />
        {/*Main*/}
        <Route
          path="/main"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Main />
            </motion.div>
          }
        />
        <Route
          path="/accountDetail"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AccountDetail />
            </motion.div>
          }
        />
        <Route
          path="/accountEdit"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AccountEdit />
            </motion.div>
          }
        />

        <Route
          path="/favoriteBrands"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <FavoriteBrands />
            </motion.div>
          }
        />

        <Route
          path="/login"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Register />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
