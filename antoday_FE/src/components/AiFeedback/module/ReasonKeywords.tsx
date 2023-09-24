import styles from './ReasonKeywords.module.css'

const ReasonKeywords : React.FC<TradingRecord> = ({
  keywordList
}) => {
  
  return (
    <div>
      <div>매수/매도 키워드</div>
      <div>
        {keywordList?.map((keyword, index) => (
          <span className={styles.keywordstyles} key={index}>#{keyword}</span>
        ))}
      </div>
    </div>
  );
}

export default ReasonKeywords;