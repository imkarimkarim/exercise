// based on https://www.figma.com/community/file/993910904620677970

import Head from "next/head";
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import { Decor } from "@/components/Decor";
import { PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { en } from "@/locales/en";
import { es } from "@/locales/es";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
    const { locale } = router;

    const t = locale === "en" ? en : es;

    return (
        <>
            <Head>
                <title>{t.head.title}</title>
                <meta name="description" content={t.head.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CssBaseline />
            <Navbar />
            <Decor />
            <div id="hero">
                <div className="left" style={{ display: "flex", marginTop: "-80px", marginRight: "-160px", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ color: "#DF6951", fontWeight: "bold", fontSize: "1.3em" }}>{t.bestDestenation.toUpperCase()}</p>
                    <h1 style={{ color: "#181E4B", margin: 0, fontFamily: "Volkhov, serif", fontSize: "4.5em", fontWeight: "bold", lineHeight: "1em" }}>
                        {t.hero[0]}
                        <span style={{ position: "relative", display: "inline" }}>
                            <Image style={{ width: "50%", height: "auto" }} src={"/line-Decore.png"} width={385} height={12} alt={"line decor"} />
                            <span style={{ position: "absolute", left: 10, top: 0 }}>{t.hero[1]}</span>
                        </span>
                        {t.hero[2]}
                    </h1>
                    <p style={{ color: "#5E6282", textAlign: "justify", marginRight: "100px", marginTop: 40, marginBottom: 30 }}>{t.paragraph}</p>
                    <div style={{ display: "flex" }}>
                        <Link href="/calendar">
                            <button
                                style={{
                                    background: "#F1A501",
                                    marginRight: "40px",
                                    border: "none",
                                    padding: "15px 25px",
                                    borderRadius: "10px",
                                    color: "white",
                                    boxShadow: "rgb(241 165 1 / 45%) 0px 5px 15px 0px",
                                }}>
                                {t.more}
                            </button>
                        </Link>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <button
                                style={{
                                    borderRadius: "100%",
                                    width: "4em",
                                    height: "4em",
                                    border: "none",
                                    background: "#DF6951",
                                    color: "white",
                                    boxShadow: "rgb(223 105 81 / 58%) 0px 5px 15px 0px",
                                }}>
                                <PlayArrow />
                            </button>
                            <span style={{ marginLeft: "15px", color: "#686D77" }}>{t.demoButton}</span>
                        </div>
                    </div>
                </div>
                <div className="right model">
                    <Image src={"/Image.png"} width={783.87} height={764} alt={"Happy girl sitting on the suitcase, ready to flight"} />
                </div>
            </div>

            <style jsx>{`
                #hero {
                    display: flex;
                    margin: 0 140px;
                }
                .model {
                }
            `}</style>
        </>
    );
}
