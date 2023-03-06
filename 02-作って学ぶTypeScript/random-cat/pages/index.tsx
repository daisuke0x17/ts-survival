import { GetServerSideProps, NextPage} from "next";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

// getServerSideProps から渡される props の型
type Props = {
    initialImageUrl: string;
}

const IndexPage:NextPage<Props> = ({initialImageUrl}) => {
    // 状態を定義
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading]= useState(false);
    // マウント時に画像を読み込む(←サーバ側で初期の画像を読み込むので不要)
    // useEffect(() => {
    //     fetchImage().then((newImage) => {
    //         setImageUrl(newImage.url);
    //         setLoading(false);
    //      });
    //  }, []);
     const handleClick =async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
     };
    return (
        <div className={styles.page}>
            <button onClick={handleClick} className={styles.button}>他のにゃんこも見る</button>
            <div className={styles.frame}>{loading || <img src={imageUrl}/>}</div>
        </div>
    );
};
export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    console.log(image);
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
};

type Image = {
    url:string;
}
 const fetchImage = async ():Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    return images[0];
 }
