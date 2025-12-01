export abstract class ConfigReader<T> {
  public abstract read(): Promise<T>;
}
