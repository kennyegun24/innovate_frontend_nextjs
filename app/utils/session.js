"use client";
import { store } from "../redux/store";

export const authState = store.getState().user.isFetching;
