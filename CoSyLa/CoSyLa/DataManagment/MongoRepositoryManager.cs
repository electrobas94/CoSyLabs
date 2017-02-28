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
		  MongoClient _Client;
		  MongoLaboratotyRepository _LaboratotyRepository;
		  MongoInstrumentRepository _InstrumentRepository;
		  MongoElementRepository    _ElementRepository;
		  MongoModelRepository      _ModelRepository;

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

		  public IModelRepository modelRepository
		  {
				get
				{
					 return _ModelRepository;
				}
		  }

		  public MongoRepositoryManager()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);

				_LaboratotyRepository = new MongoLaboratotyRepository (_Client);
				_InstrumentRepository = new MongoInstrumentRepository (_Client);
				_ElementRepository    = new MongoElementRepository    (_Client);
				_ModelRepository      = new MongoModelRepository      (_Client);
		  }
	 }
}