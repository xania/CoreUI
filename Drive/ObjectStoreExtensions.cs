namespace Xania.CoreUI.Drive
{
    public static class ObjectStoreExtensions
    {
        public static TModel Add<TModel>(this IObjectStore<TModel> store, TModel model)
        {
            return store.AddAsync(model).Result;
        }
    }
}