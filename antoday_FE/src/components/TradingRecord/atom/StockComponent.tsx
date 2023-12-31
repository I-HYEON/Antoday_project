import React from "react";
import styles from "./StockComponent.module.css";
import { useNavigate } from "react-router-dom";

interface StockInfoComponentProps {
  companyInfo: CompanyInfo; // 기업 정보를 받을 prop
  isLoading: boolean;
  handleStockClick: (stockCode: string) => void;
}

const StockComponent: React.FC<StockInfoComponentProps> = ({
  companyInfo,
  handleStockClick,
}) => {
  return (
    <div
      className={styles.stockSearchResult}
      onClick={() => handleStockClick(companyInfo.stockCode)}
    >
      {companyInfo ? (
        <React.Fragment>
          <img
            className={styles.stockImage}
            src={companyInfo.logoUrl}
            alt="기업이미지"
          />
          <p>{companyInfo.corpName}</p>
        </React.Fragment>
      ) : (
        // 스켈레톤 코드를 표시
        <div className={styles.skeleton}>
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonText}></div>
        </div>
      )}
    </div>
  );
};

export default StockComponent;
