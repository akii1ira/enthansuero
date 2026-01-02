// import Image from "next/image";

// interface CardProps {
//   image: string;
//   width: number;
//   height: number;
// }
// export default function MyImage({ image, width, height }:CardProps) {
//   return (
//       <Image
//         src={`${image}`}
//         alt="Project image"
//         width={width}
//         height={height}
//         className="object-contain"
//         priority
//       />
//   );
// }


// import Image from "next/image";

// interface MyImageProps {
//   image?: string | null;
//   width: number;
//   height: number;
//   alt?: string;
// }

// /**
//  * Фиксит URL для Payload и рендерит через next/image
//  */
// export default function MyImage({ image, width, height, alt }: MyImageProps) {
//   if (!image) return null;

//   // если URL начинается с /globals/... заменяем на /api/media/file/...
//   const fixedUrl = image.replace(/^\/globals\/[^/]+/, '/api/media/file');

//   return (
//     <Image
//       src={fixedUrl.startsWith('http') ? fixedUrl : `https://payload-1-vowz.onrender.com${fixedUrl}`}
//       alt={alt || "Project image"}
//       width={width}
//       height={height}
//       className="object-contain"
//       priority
//     />
//   );
// }

import Image from "next/image";

interface MyImageProps {
  image?: string | null;
  width: number;
  height: number;
  alt?: string;
}

const BASE = "https://payload-1-vowz.onrender.com";

export default function MyImage({ image, width, height, alt }: MyImageProps) {
  if (!image) return null;

  let url = image;

  // 1 — если URL без домена → добавляем
  if (url.startsWith("/")) url = BASE + url;

  // 2 — если Payload вернул путь типа /globals/... → заменяем
  url = url.replace("/globals/header-settings", "/api/media/file");

  return (
    <Image
      src={url}
      alt={alt || "Image"}
      width={width}
      height={height}
      className="object-contain"
    />
  );
}
