class QuestionsController < ApplicationController
  def create
    question = Question.create({
      title: params[:title],
      description: params[:description],
      pass_criteria: params[:answer_id] || 1,
    })
    render json: question, status: :ok
  end

  def update
    question = Question.find_by(id: params[:id])
    question = question.update({
      title: params[:title],
      description: params[:description],
      pass_criteria: params[:answer_id] || 1,
    })
    render json: question, status: :ok
  end

  def show
    question = Question.find_by(id: params[:id])
    render json: question, status: :ok
  end
end
