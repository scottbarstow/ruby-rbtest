class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    render :status => :ok, json: Task.all
  end
end
