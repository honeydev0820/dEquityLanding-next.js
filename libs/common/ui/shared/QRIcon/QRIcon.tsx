import React from "react";

export const QRIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.10279 24.1622C4.04944 23.7781 3.99609 22.7112 3.99609 21.7829V20.1078H5.00971H6.02332V21.9856C6.02332 24.0982 6.09801 24.5037 6.63149 25.1118C7.25032 25.848 7.67711 25.9761 9.41625 25.9761H10.9313V26.9897V28.0033H9.6083C8.88277 28.0033 8.03987 27.9499 7.73045 27.8966C5.8526 27.5445 4.40154 26.0401 4.10279 24.1622ZM9.22788 20.321V22.775H11.6819H14.1359V20.321V17.867H11.6819H9.22788V20.321ZM12.9622 20.321V21.6014H11.6819H10.4015V20.321V19.0407H11.6819H12.9622V20.321ZM15.3585 15.36L15.3905 13.5141L15.4119 11.679H15.9987H16.5855L16.6069 13.5141L16.6389 15.36L17.2577 15.392L17.8659 15.424V16.0002V16.587H18.4527H19.0395V16.0002V15.4133H19.6797H20.3199V16.0002V16.587H19.733H19.1462V17.1738V17.7607H18.506H17.8659V18.9877V20.204L17.2577 20.236L16.6389 20.268L16.6069 21.4737L16.5748 22.6687H15.9987H15.4119V20.8548V19.041H15.9987H16.5855V18.4008V17.7607H15.9987H15.4119V17.1738V16.587H14.7717H14.1315V16.0002V15.424L14.7503 15.392L15.3585 15.36ZM15.4119 16.587H15.9987H16.5855V15.9468V15.3066H15.9987H15.4119V15.9468V16.587ZM9.22788 11.6787V14.1327H11.6819H14.1359V11.6787V9.22472H11.6819H9.22788V11.6787ZM12.9622 11.6787V12.9591H11.6819H10.4015V11.6787V10.3984H11.6819H12.9622V11.6787ZM5.27056 5.45842C5.84672 4.82891 6.56158 4.39146 7.41515 4.1674C7.77792 4.07137 8.53546 4.00735 9.46371 4.00735L10.9254 3.99669V5.0103V6.02391H9.4317C8.41809 6.02391 7.82059 6.06659 7.58586 6.16261C7.03104 6.39735 6.54024 6.88815 6.2735 7.46431C6.03877 7.95511 6.01743 8.13649 6.01743 9.79028V11.5828L5.02516 11.5508L4.04355 11.5188L4.01154 10.0784C3.9582 7.63502 4.24628 6.56806 5.27056 5.45842ZM21.9182 6.02388V5.01027V3.99666H22.9105C24.6176 3.99666 25.7593 4.43411 26.7302 5.4584C27.7438 6.52536 27.9999 7.45361 27.9999 9.99298V11.5721H26.9863H25.9727V9.85427C25.9727 7.91241 25.8873 7.49629 25.3645 6.88812C24.7884 6.21594 24.2762 6.02388 23.0065 6.02388H21.9182ZM15.416 10.5051V9.86495V9.22477H16.0028H16.5897V9.86495V10.5051H16.0028H15.416ZM17.8678 11.6787V14.1327H20.3218H22.7758V11.6787V9.22472H20.3218H17.8678V11.6787ZM21.6022 11.6787V12.9591H20.3218H19.0415V11.6787V10.3984H20.3218H21.6022V11.6787ZM9.22788 15.9998V16.5866H9.86805H10.5082V15.9998V15.4129H9.86805H9.22788V15.9998ZM11.6797 16.5866V15.9998V15.4129H12.3199H12.96V15.9998V16.5866H12.3199H11.6797ZM21.4963 15.9998V16.5866H22.1365H22.7767V15.9998V15.4129H22.1365H21.4963V15.9998ZM20.2685 19.0944L20.3005 17.8887L20.3325 16.6937H20.962H21.6022V17.2805V17.8673H22.189H22.7758V18.4542V19.041H22.189H21.6022V19.6812V20.3214H20.3752H19.1482V20.9295V21.5484L19.735 21.5164L20.3218 21.4737V22.0712V22.6687H19.0948H17.8678V21.495V20.3214H18.4546H19.0415V19.7345V19.1584L19.6603 19.1264L20.2685 19.0944ZM25.9727 22.0497C25.9727 23.8742 25.9513 24.0342 25.7166 24.5357C25.2258 25.6026 24.5216 25.9761 22.9852 25.9761H21.9182V26.9897V28.0033H22.9105C24.6176 28.0033 25.7593 27.5658 26.7302 26.5416C27.7438 25.4746 27.9892 24.5143 27.9999 21.7296V20.1078H26.9863H25.9727V22.0497ZM21.4963 22.2095C21.4963 21.8895 21.5283 21.6014 21.571 21.5694C21.603 21.5267 21.8911 21.4947 22.2112 21.4947H22.7767V22.1349V22.775H22.1365H21.4963V22.2095Z"
        fill="#4D6372"
      />
    </svg>
  );
};

export default QRIcon;