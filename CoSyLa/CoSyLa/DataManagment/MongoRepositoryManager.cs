using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class MongoRepositoryManager: IRepositoryManager
	 {
		  MongoClient    _Client;
		  IMongoDatabase _Database;
		  MongoLaboratotyRepository _LaboratotyRepository;
		  MongoInstrumentRepository _InstrumentRepository;
		  MongoElementRepository    _ElementRepository;
		  Mongo3DModelRepository    _ModelRepository;

		  public ILaboratotyRepository laboratotyRepository 
		  { 
				get
				{
					 return _LaboratotyRepository;
				}
		  }
		  public IInstrumentRepository instrumentRepository
		  {
				get
				{
					 return _InstrumentRepository;
				}
		  }
		  public IElementRepository elementRepository
		  {
				get
				{
					 return _ElementRepository;
				}
		  }

		  public IModel3DRepository modelRepository
		  {
				get
				{
					 return _ModelRepository;
				}
		  }

		  public MongoRepositoryManager( string databaseName )
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client   = new MongoClient(conectParams);
				_Database = _Client.GetDatabase(databaseName);

				if ( _Database == null )
					 throw new ApplicationException("Error: Conection with Mongo database is failed");

				_LaboratotyRepository = new MongoLaboratotyRepository ( _Database );
				_InstrumentRepository = new MongoInstrumentRepository ( _Database );
				_ElementRepository    = new MongoElementRepository    ( _Database );
				_ModelRepository      = new Mongo3DModelRepository    ( _Database );
		  }
	 }
}