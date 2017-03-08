using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class Mongo3DModelRepository: IModel3DRepository
	 {
		  MongoClient _Client;

		  public Mongo3DModelRepository()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);
		  }
		  public Mongo3DModelRepository(IMongoDatabase mongoClient)
		  {
				//_Client = mongoClient;
		  }
	 }
}