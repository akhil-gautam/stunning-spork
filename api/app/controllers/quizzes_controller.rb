class QuizzesController < ApplicationController
  def create
    quiz = Quiz.create(create_params.merge({uuid: SecureRandom.hex(4)}))
    render json: {uuid: quiz.uuid}, status: :ok
  end

  def show
    quiz = Quiz.find_by(uuid: params[:uuid])
    render json: quiz, status: :ok
  end

  private

  def create_params
    params.require(:quiz).permit(:title, :description, :pass_criteria)
  end
end
