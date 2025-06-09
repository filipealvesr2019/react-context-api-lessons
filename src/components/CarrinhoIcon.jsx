import Link from "next/link";

export default function CarrinhoIcon(){
    return (
        <Link href={"/carrinho"} styles={{
            textDecoration: "none"
        }}>
            <div style={{
                position: "relative",
                display: "inline-block"
            }}>
 🛒
            </div>
        </Link>
    )
}