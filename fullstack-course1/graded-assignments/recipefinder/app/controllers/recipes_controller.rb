class RecipesController < ApplicationController
  def index
    if params[:search] == nil
      @search = 'chocolate'
    else
      @search = params[:search]
    end
    @recipes = Recipe.for(@search)
  end
end
