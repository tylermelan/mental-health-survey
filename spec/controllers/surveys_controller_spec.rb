require 'rails_helper'

RSpec.describe SurveysController do
  describe "GET new" do
    render_views

    it "renders the react-container with the Survey component" do
      get :new
      expect(response.body).to include('<div id="react-container" data-component="Survey"></div>')
    end
  end

  describe "POST create" do
    context 'survey_params are valid' do
      let(:survey_params) { { survey: { overwhelmed: 'sometimes', activities: 'some text', supported: '5' } } }

      it "returns status code 201 created" do
        post :create, params: survey_params
        expect(response).to have_http_status(:created)
      end

      it "creates a new Survey with the correct params" do
        post :create, params: survey_params

        expect(Survey.last.slice(:overwhelmed, :activities, :supported).symbolize_keys).to eq(survey_params[:survey])
      end
    end

    context 'survey_params are invalid' do
      let(:survey_params) { { survey: { overwhelmed: 'other', activities: '', supported: '0' } } }

      it "returns status code 422 unprocessable entity" do
        post :create, params: survey_params
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
