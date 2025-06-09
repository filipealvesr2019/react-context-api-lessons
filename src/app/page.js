import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/ProductList";
import Link from "next/link";
import CarrinhoIcon from "@/components/CarrinhoIcon";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span>Logo</span>
        <Link href={"/carrinho"}> 
        <CarrinhoIcon />
        
        </Link>
      </header>
      <main className={styles.main}>
       <ProductList />
      </main>

      <footer className={styles.footer}>
      </footer>

      
    </div>
  );
}
