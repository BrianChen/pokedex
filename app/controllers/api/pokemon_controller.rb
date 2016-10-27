class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    @items = @pokemon.items
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save!
      render :show
    else
      render json: ["Invalid pokemon"], status:422
    end
  end

  private
  def pokemon_params(params)
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

end
