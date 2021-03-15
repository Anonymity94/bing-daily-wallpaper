#!/usr/bin/env -S deno run --unstable --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
import { format } from "std/datetime/mod.ts";
import { IResponse } from "./types.ts";

const BING_URL = "https://cn.bing.com";
const BING_API = `${BING_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1615820180559&pid=hp&uhd=1&uhdwidth=3840&uhdheight=2160`;

const response = await fetch(BING_API);

if (!response.ok) {
  console.error(response.statusText);
  Deno.exit(-1);
}

const { images }: IResponse = await response.json();
const [image] = images;
const { url, enddate, copyright } = image;
// 图片地址
const imgUrl = `${BING_API}${image.url.split("&")[0]}`;

// 更新 README.md
// TODO:
