import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';
import { GEOPARK_QUIZ_QUESTIONS } from '../data/geoparkData';

export const GeoparkQuiz: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = GEOPARK_QUIZ_QUESTIONS[currentQuestionIdx];

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return; // Prevent changing after submit
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < GEOPARK_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="py-16 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>TRẮC NGHIỆM TƯƠNG TÁC ĐẠI SỨ DI SẢN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Bạn Hiểu Biết Thế Nào Về Lạng Sơn Geopark?
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Thử thách 8 câu hỏi chuẩn xác về các thông số diện tích, 4 tuyến di sản, hóa thạch Na Dương và các giá trị văn hóa độc bản dựa trên cổng thông tin chính thức <em>langsongeopark.com.vn</em>.
          </p>
        </div>

        {/* Quiz Container */}
        {!quizFinished ? (
          <div className="bg-stone-900/90 rounded-3xl border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-4">
              <span className="font-semibold text-emerald-400">
                Câu hỏi {currentQuestionIdx + 1} / {GEOPARK_QUIZ_QUESTIONS.length}
              </span>
              <span className="font-mono">
                Điểm hiện tại: <strong className="text-amber-300">{score}</strong>
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-white font-serif leading-snug">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-stone-950 border-stone-800 text-stone-300 hover:bg-stone-800/80';
                if (showExplanation) {
                  if (idx === currentQ.correctAnswer) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/40';
                  } else if (idx === selectedOption) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 ring-1 ring-rose-500/40';
                  } else {
                    btnStyle = 'bg-stone-950/50 border-stone-800 text-stone-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={showExplanation}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm font-medium flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {showExplanation && idx === currentQ.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {showExplanation && idx === selectedOption && idx !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {showExplanation && (
              <div className="p-4 rounded-2xl bg-stone-950 border border-amber-600/40 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Giải thích dữ liệu chính thức:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {currentQ.explanation}
                </p>

                <div className="pt-2 text-right">
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer transition-colors shadow-md"
                  >
                    <span>
                      {currentQuestionIdx < GEOPARK_QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả chung cuộc'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Results screen */
          <div className="bg-stone-900/90 rounded-3xl border border-stone-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Chúc mừng bạn đã hoàn thành bài trắc nghiệm!
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white mt-1">
                Kết quả: {score} / {GEOPARK_QUIZ_QUESTIONS.length} câu đúng
              </h3>
            </div>

            <p className="text-sm sm:text-base text-stone-300 max-w-lg mx-auto leading-relaxed">
              {score >= 7
                ? 'Xuất sắc! Bạn xứng đáng là Đại sứ Di sản am tường Công viên địa chất toàn cầu UNESCO Lạng Sơn.'
                : score >= 4
                ? 'Khá tốt! Bạn đã nắm được những thông tin cốt lõi nhất về Công viên địa chất Lạng Sơn và 4 tuyến du lịch di sản.'
                : 'Bạn đã có bước khởi đầu làm quen với Công viên địa chất Lạng Sơn. Hãy đọc thêm các chuyên mục để tích lũy kiến thức chuẩn xác nhé!'}
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleRestartQuiz}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Thực hiện lại bài trắc nghiệm</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
