class QuizzesController < ApplicationController
  def create
    quiz = Quiz.create({
      title: params[:title],
      description: params[:description],
      pass_criteria: params[:pass_criteria] || 3,
      uuid: SecureRandom.hex(4)
    })
    render json: quiz, status: :ok
  end

  def show
    quiz = Quiz.find_by(uuid: params[:uuid])
    render json: quiz, status: :ok
  end
end
