"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Spinner,
} from "@heroui/react";
import { GithubIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-sky-300 text-3xl font-bold">About Section</h1>
      <Spinner color="warning" label="Loading..." />
    </div>
  );
}
