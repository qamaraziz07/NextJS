import React from "react";

import styles from "./Card.module.css";

import { useRouter } from "next/router";
interface CardProps {
  name?: string;
  phone?: string;
  email?: string;
  image?: any;
  id: number;
  isFavourite: boolean;
}
interface prop {
  url: string;
  alt: string;
}

export default function Card({ name, phone, email, image, id }: CardProps) {
  const { url, alt }: any = image;

  const router = useRouter();

  return (
    <div
      className={styles.card}
      data-testid="pet-card"
      onClick={() => {
        router.push(`/cats/${id}`);
      }}
    >
      <div className={styles["card-header"]}>
        <img src={url} alt={alt} className={styles["card-img"]} />
      </div>
      <div className={styles["cardContent"]}>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
