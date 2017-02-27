using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class MongoLaboratotyRepository: ILaboratotyRepository
	 {
		  MongoClient _Client;
		  public MongoLaboratotyRepository()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);
		  }
		  public MongoLaboratotyRepository( MongoClient mongoClient )
		  {
				_Client = mongoClient;
		  }
}