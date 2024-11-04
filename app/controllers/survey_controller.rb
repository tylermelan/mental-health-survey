class SurveyController < ApplicationController
  def index
  end

  def create
    @survey = Survey.new(survey_params)

    if @survey.save
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def survey_params
    params.require(:survey).permit(:overwhelmed, :supported, :activities)
  end
end
