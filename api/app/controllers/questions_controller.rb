class QuestionsController < ApplicationController
  before_action :set_quiz, only: [:create, :index]


  def index
    questions = Question.where(quiz_id: @quiz.id)
    render json: questions, status: :ok
  end

  def create
    question = Question.create({
      title: params[:title],
      description: params[:description],
      answer_id: params[:answer_id] || 1,
      quiz_id: @quiz.id
    })
    render json: question, status: :ok
  end

  def update
    question = Question.find_by(id: params[:id])
    question = question.update({
      title: params[:title],
      description: params[:description],
      answer_id: params[:answer_id] || 1,
    })
    render json: question, status: :ok
  end

  def show
    question = Question.find_by(id: params[:id])
    render json: question, status: :ok
  end

  private

  def set_quiz
    @quiz = Quiz.find_by(uuid: params[:quiz_id])
  end
end
